package com.ion.mock.utils;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.json.*;

public class Utils {

    public static String _salt = "!dASDAS3#63533$#";

    public static String getSHA512(String toHash, String salt) {
        String encrypted = null;

        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.update(salt.getBytes(StandardCharsets.UTF_8));
            byte[] bytes = md.digest(toHash.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < bytes.length; i++) {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            encrypted = sb.toString();
        } catch(NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        return encrypted;
    }

    public static String getMd5(String toHash) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(toHash.getBytes());
            BigInteger no = new BigInteger(1, messageDigest);
            String hashtext = no.toString(16);
            while (hashtext.length() < 32) {
                hashtext = "0" + hashtext; 
            }
            return hashtext;
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public static String stringToJson(String str) {
        String jsonString = "{mock: " + str.replace("\n", "").replace("\r", "") + "}";
        return jsonString;
    }
}