public // backend/src/main/java/com/example/ecomm/entity/User.java
package com.example.ecomm.entity;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String username;
  private String password;
  private String role; // "USER" or "ADMIN"
  // getters/setters
}
 {
    
}
