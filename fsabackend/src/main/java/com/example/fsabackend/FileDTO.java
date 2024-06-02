package com.example.fsabackend;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileDTO {
    @JsonProperty
    private String filename;

    @JsonProperty
    private String senderName;

    // Constructor
    public FileDTO(String filename, String senderName) {
        this.filename = filename;
        this.senderName = senderName;
    }

    // Default constructor needed for Jackson
    public FileDTO() {
    }

    // Getters and setters
    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }
}
