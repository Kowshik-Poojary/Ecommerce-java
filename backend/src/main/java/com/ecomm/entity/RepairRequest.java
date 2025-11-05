import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="repair_requests")
public class RepairRequest {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id; // use as repairId
  private String username; // can be null for guest
  private String customerName;
  private String phone;
  private String deviceModel;
  private String problemDescription;
  private String status; // e.g. "Received", "Diagnosed", "Repairing", "Repaired", "Shipped", "Delivered"
  private String createdAt;
  // getters/setters
}
