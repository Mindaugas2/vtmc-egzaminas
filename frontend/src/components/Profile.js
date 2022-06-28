import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <p>Sveiki atvykę, {currentUser.email}</p>
    );
};

export default Profile;