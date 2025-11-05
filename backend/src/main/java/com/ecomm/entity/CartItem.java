// backend/.../entity/CartItem.java
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
