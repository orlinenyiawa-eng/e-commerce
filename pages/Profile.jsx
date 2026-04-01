function Profile({ user }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>👤 Mon Profil</h2>

      {user ? (
        <div>
          <p>Email : {user.email}</p>
        </div>
      ) : (
        <p>⚠️ Tu n'es pas connecté</p>
      )}
    </div>
  );
}

export default Profile;