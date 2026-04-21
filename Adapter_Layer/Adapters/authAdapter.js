export const create = async (profile) => {
    const tranformedProfile = {
        name: profile.firstName + " " + profile.lastName,
        birthdate: profile.dob,
        "program": profile.course + " " + profile.major,
        "address": profile.address,
        "studentStatus": profile.status,
    }

    const response = await fetch(
        `https://ais-simulated-legacy.onrender.com/api/students`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tranformedProfile)

        });
        return await response.json();
    }
    
