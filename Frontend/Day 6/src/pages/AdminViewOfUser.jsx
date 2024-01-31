import React from 'react';
import '../assets/css/AdminViewOfUser.css';
import TableUI from '../components/TableUI';
function AdminViewOfUser(props){
    const header=["Boat ID", "Boat name", "Check in", "Check out","Status"];
    const columns=[
        {"Boat ID":12345,"Boat name":"Aqua Haven","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"Boat ID":12345,"Boat name":"River Retreat","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"Boat ID":12345,"Boat name":"Nautical Nest","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"Boat ID":12345,"Boat name":"Serenity Sail","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"},
        {"Boat ID":12345,"Boat name":"Tide's Tranquility","Check in":"31-01-2024","Check out":"01-02-2024","Status":"Booked"}
    ];
    const flexRatio=[1,3,1,1,1];
    const query=new URLSearchParams(location.search)
    const userId=(query.get("id"))
    return(
        <div className="admin-user-view-outer">
            <div className="admin-user-view-personal-profile">
                <div className="admin-user-view-personal-profile-picture"></div>
                <div className="admin-user-view-personal-profile-info">
                    <table className="admin-user-view-table">
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">User ID</td>
                            <td className="admin-user-view-td">12345</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">User Name</td>
                            <td className="admin-user-view-td">Shreya</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">Email ID</td>
                            <td className="admin-user-view-td">shreya@gmail.com</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">Phone number</td>
                            <td className="admin-user-view-td">88703 48588</td>
                        </tr>
                        <tr className="admin-user-view-tr">
                            <td className="admin-user-view-td">Address</td>
                            <td className="admin-user-view-td">Gandhi nagar, Rajasthan</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="admin-user-view-all-bookings">
            <TableUI header={header} columns={columns} flexRatio={flexRatio}/>
                {/* All bookings of the user */}
            </div>
        </div>
    );
}
export default AdminViewOfUser;

/*

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">Boat ID</div>
                    <div className="admin-user-view-booking-contents">Boat name</div>
                    <div className="admin-user-view-booking-contents">Check in</div>
                    <div className="admin-user-view-booking-contents">Check out</div>
                    <div className="admin-user-view-booking-contents">Status</div>
                </div>
                
                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>

                <div className="admin-user-view-booking">
                    <div className="admin-user-view-booking-contents">12345</div>
                    <div className="admin-user-view-booking-contents">La Guesta Boat</div>
                    <div className="admin-user-view-booking-contents">31/01/2024</div>
                    <div className="admin-user-view-booking-contents">15/02/2024</div>
                    <div className="admin-user-view-booking-contents">Booked</div>
                </div>
*/