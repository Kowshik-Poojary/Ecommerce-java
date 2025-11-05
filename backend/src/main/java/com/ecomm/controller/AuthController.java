import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.Map;
import java.util.Base64;
import jakarta.annotation.PostConstruct;
import com.ecomm.entity.User;
import com.ecomm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

 // replaces javax.annotation.PostConstruct

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired UserRepository userRepo;

  @PostConstruct
  public void init() {
    // ensure admin exists
    if (!userRepo.existsByUsername("admin")) {
      User admin = new User();
      admin.setUsername("admin");
      admin.setPassword("Admin@123"); // plain for demo only
      admin.setRole("ADMIN");
      userRepo.save(admin);
    }
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody Map<String,String> body) {
    String username = body.get("username");
    String password = body.get("password");
    Optional<User> u = userRepo.findByUsername(username);
    if (u.isPresent() && u.get().getPassword().equals(password)) {
      Map<String,Object> resp = Map.of(
        "username", username,
        "role", u.get().getRole(),
        "token", Base64.getEncoder().encodeToString((username+":" + u.get().getRole()).getBytes())
      );
      return ResponseEntity.ok(resp);
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error","Invalid credentials"));
  }
}
