package ru.kpfu.itis.lzakharov.contacts.model;import org.hibernate.validator.constraints.NotBlank;import javax.persistence.*;@Entitypublic class Client {    @Id    @GeneratedValue    private Long id;    @Column(unique = true)    @NotBlank    private String username;    @NotBlank    private String password;    public Long getId() {        return id;    }    public void setId(Long id) {        this.id = id;    }    public String getUsername() {        return username;    }    public void setUsername(String username) {        this.username = username;    }    public String getPassword() {        return password;    }    public void setPassword(String password) {        this.password = password;    }}