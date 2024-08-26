import '../components/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User Avatar" 
          className="profile-avatar" 
        />
        <h2 className="profile-name">User</h2>
        <p className="profile-email">user@example.com</p>
      </div>
      <div className="profile-details">
        <h3>Profile Details</h3>
        <ul>
          <li><strong>Location:</strong> INDIA, ASIA</li>
          <li><strong>Member Since:</strong> January 2024</li>
          <li><strong>Orders:</strong> 15</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
