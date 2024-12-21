import { useState } from 'react';
import pic1 from '/images/pic1.png';
import pic2 from '/images/pic2.png';
import pic3 from '/images/pic3.png';

function ProfilePage({ profileData, setProfileData }) {
    const [tempProfile, setTempProfile] = useState(profileData);
    const [editingField, setEditingField] = useState(null);
    const [validationMessage, setValidationMessage] = useState('');

    const handleSave = (field) => {
        let isValid = true;

        if (field === 'username') {
        if (!tempProfile.username.trim()) {
            setValidationMessage('Username cannot be empty or only whitespace.');
            isValid = false;
        } else if (tempProfile.username === 'dog') {
            setValidationMessage("You're kidding, right?");
            isValid = false;
        }
        }

        if (field === 'actualName' && !tempProfile.actualName.trim()) {
        tempProfile.actualName = tempProfile.username;
        }

        if (isValid) {
        setProfileData({ ...profileData, [field]: tempProfile[field] });
        setEditingField(null);
        setValidationMessage('');
        }
    };

    return (
        <div className="page">
        <div className="profile-block">
            <div className="profile-datum">
            <span>Profile Picture:</span>
            {editingField === 'profilePic' ? (
                <>
                <select
                    value={tempProfile.profilePic}
                    onChange={(e) =>
                    setTempProfile({ ...tempProfile, profilePic: e.target.value })
                    }
                >
                    <option value={pic1}>Pic 1</option>
                    <option value={pic2}>Pic 2</option>
                    <option value={pic3}>Pic 3</option>
                </select>
                <button onClick={() => handleSave('profilePic')}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
                </>
            ) : (
                <>
                <img
                    src={profileData.profilePic}
                    alt="Profile"
                    className="profile-pic"
                />
                <button onClick={() => setEditingField('profilePic')}>Edit</button>
                </>
            )}
        </div>

        <div className="profile-datum">
            <span>Username:</span>
            {editingField === 'username' ? (
                <>
                <input
                    type="text"
                    value={tempProfile.username}
                    onChange={(e) =>
                    setTempProfile({ ...tempProfile, username: e.target.value })
                    }
                />
                <button onClick={() => handleSave('username')}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
                {validationMessage && editingField === 'username' && (
                    <div className="validation-message">{validationMessage}</div>
                )}
                </>
            ) : (
                <>
                {profileData.username}
                <button onClick={() => setEditingField('username')}>Edit</button>
                </>
            )}
        </div>

        <div className="profile-datum">
            <span>Actual Name:</span>
            {editingField === 'actualName' ? (
                <>
                <input
                    type="text"
                    value={tempProfile.actualName}
                    onChange={(e) =>
                    setTempProfile({ ...tempProfile, actualName: e.target.value })
                    }
                />
                <button onClick={() => handleSave('actualName')}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
                </>
            ) : (
                <>
                {profileData.actualName}
                <button onClick={() => setEditingField('actualName')}>Edit</button>
                </>
            )}
        </div>

        <div className="profile-datum">
            <span>Verified Dog Free:</span>
            {editingField === 'isDogFree' ? (
                <>
                <input
                    type="checkbox"
                    checked={tempProfile.isDogFree}
                    onChange={(e) =>
                    setTempProfile({ ...tempProfile, isDogFree: e.target.checked })
                    }
                />
                <button onClick={() => handleSave('isDogFree')}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
                </>
            ) : (
                <>
                {profileData.isDogFree ? 'Yes' : 'No'}
                <button onClick={() => setEditingField('isDogFree')}>Edit</button>
                </>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;