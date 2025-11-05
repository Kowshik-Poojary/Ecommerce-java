import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="cart_items")
public class CartItem {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private Long productId;
  private int quantity;
  private String username; // link cart to username
  // getters/setters
}
