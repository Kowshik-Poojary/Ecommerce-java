import org.springframework.data.jpa.repository.JpaRepository; // same
import java.util.List;      // same
import java.util.Optional;  // same
public interface RepairRequestRepository extends JpaRepository<RepairRequest, Long> {
  Optional<RepairRequest> findById(Long id);
  List<RepairRequest> findByUsername(String username);
}
