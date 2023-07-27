<form onSubmit={handleSubmit}>
  <div>
    <label>Phone Number:</label>
    <input
      type="text"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      onBlur={() => validatePhone(phone)}
    />
    {phoneError && <span>{phoneError}</span>}
  </div>
  <div>
    <label>Password:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      onBlur={() => validatePassword(password)}
    />
    {passwordError && <span>{passwordError}</span>}
  </div>
  <button type="submit">Submit</button>
</form>;
