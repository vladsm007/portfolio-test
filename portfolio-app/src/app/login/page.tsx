// src/app/login/page.tsx
import styles from './login.module.css';

export default function LoginPage() {
  // Basic handler for form submission (no actual submission logic yet)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Login attempt! (This is a placeholder - no actual authentication)");
    // Here you would typically gather form data and send it for authentication
  };

  return (
    <div className={styles.container}>
      <h1>Admin Login</h1>
      <p className={styles.intro}>
        Please enter your credentials to access the admin dashboard.
      </p>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}
