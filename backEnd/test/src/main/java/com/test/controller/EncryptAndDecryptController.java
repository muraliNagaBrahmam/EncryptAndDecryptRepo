package com.test.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.*;
import java.util.Base64;

@SpringBootApplication
@RestController
@RequestMapping("/api")
@CrossOrigin
public class EncryptAndDecryptController {

    public static void main(String[] args) {
        SpringApplication.run(EncryptAndDecryptController.class, args);
    }

    @PostMapping("/convert")
    public Response convertString(@RequestBody String input) throws Exception {
        boolean isEncrypted = isBase64Encoded(input);
        
        // Generate Dynamic Keys
        String symmetricKey = generateSymmetricKey();
        KeyPair keyPair = generateAsymmetricKeyPair();
        String publicKey = Base64.getEncoder().encodeToString(keyPair.getPublic().getEncoded());
        String privateKey = Base64.getEncoder().encodeToString(keyPair.getPrivate().getEncoded());

        String processedText = isEncrypted ? decrypt(input) : encrypt(input);

        return new Response(processedText, symmetricKey, publicKey, privateKey);
    }

    private String encrypt(String text) {
        return Base64.getEncoder().encodeToString(text.getBytes());
    }

    private String decrypt(String encryptedText) {
        return new String(Base64.getDecoder().decode(encryptedText));
    }

    private boolean isBase64Encoded(String text) {
        try {
            Base64.getDecoder().decode(text);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }


    private String generateSymmetricKey() throws Exception {
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256); // 256-bit key
        SecretKey secretKey = keyGen.generateKey();
        return Base64.getEncoder().encodeToString(secretKey.getEncoded());
    }


    private KeyPair generateAsymmetricKeyPair() throws Exception {
        KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance("RSA");
        keyPairGen.initialize(2048);
        return keyPairGen.generateKeyPair();
    }

    static class Response {
        private String output;
        private String symmetricKey;
        private String publicKey;
        private String privateKey;

        public Response(String output, String symmetricKey, String publicKey, String privateKey) {
            this.output = output;
            this.symmetricKey = symmetricKey;
            this.publicKey = publicKey;
            this.privateKey = privateKey;
        }

        public String getOutput() {
            return output;
        }

        public String getSymmetricKey() {
            return symmetricKey;
        }

        public String getPublicKey() {
            return publicKey;
        }

        public String getPrivateKey() {
            return privateKey;
        }
    }
}
