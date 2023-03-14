import "../../Reserve.css";
import { useForm } from "react-hook-form";
import { appdb } from '../../utils/firebase';
import { useEffect, useState} from "react";
import { getDocs, getFirestore, collection} from "firebase/firestore";
import { Button } from 'primereact/button';
import CancelBookingPopup from "../popup/Cancel_booking_popup";

function CancelBookingDay2(props){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [popup,setPopup] = useState(false);
    const [bkList,setBkList] = useState([]);
    let bookingList = [];

    const [rooms,setRoom] = useState([]);
    const [d2_time1,setD2_time1] = useState([]);
    const [d2_time2,setD2_time2] = useState([]);
    const [d2_time3,setD2_time3] = useState([]);
    const [d2_time4,setD2_time4] = useState([]);
    const [d2_time5,setD2_time5] = useState([]);
    const [d2_time6,setD2_time6] = useState([]);
    const [d2_time7,setD2_time7] = useState([]);

    const db = getFirestore(appdb);
    const docRoom = collection(db,'rooms');

    const docD2_time1 = collection(db,'d2_time1');
    const docD2_time2 = collection(db,'d2_time2');
    const docD2_time3 = collection(db,'d2_time3');
    const docD2_time4 = collection(db,'d2_time4');
    const docD2_time5 = collection(db,'d2_time5');
    const docD2_time6 = collection(db,'d2_time6');
    const docD2_time7 = collection(db,'d2_time7');

    const getRoom = async ()=>{
        const dbtotal = await getDocs(docRoom);
        setRoom(dbtotal.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
    }

    const getTimetomorow = async ()=>{
        const dbD2_time1 = await getDocs(docD2_time1);
        const dbD2_time2 = await getDocs(docD2_time2);
        const dbD2_time3 = await getDocs(docD2_time3);
        const dbD2_time4 = await getDocs(docD2_time4);
        const dbD2_time5 = await getDocs(docD2_time5);
        const dbD2_time6 = await getDocs(docD2_time6);
        const dbD2_time7 = await getDocs(docD2_time7);

        setD2_time1(dbD2_time1.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        setD2_time2(dbD2_time2.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        setD2_time3(dbD2_time3.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        setD2_time4(dbD2_time4.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        setD2_time5(dbD2_time5.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        setD2_time6(dbD2_time6.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        setD2_time7(dbD2_time7.docs.map((item)=>{
            return {...item.data(),id: item.id}
        }));
        
    }

    function onClickselect(timeselect, collect, room) {
        const status = document.querySelector('.reserve_tb');
        status.addEventListener('click',(e) => {
            if(e.target.classList.contains('unselectable_cancel')){
                e.target.classList.add('status_over');
            }
        });
        if(bookingList[bookingList.length-1] !== timeselect){
            timeselect["collect"] = collect;
            timeselect["room"] = room;
            timeselect["dateselect"] = props.dateselect;
            bookingList.push(timeselect);
        }
    }

    const onClickPopup = () => {
        setBkList(bookingList);
        setPopup(true);
    }

    useEffect(()=>{
        getRoom();
        getTimetomorow();
    },[]);
    return (
        <div>
            <div className="boxes">
                <div className="box_body">
                    <table className="reserve_tb">
                        <tbody>
                            <tr className="columnTop">
                                <th>ห้อง/เวลา</th>
                                <th>9:00-10:00</th>
                                <th>10:00-11:00</th>
                                <th>11:00-12:00</th>
                                <th>12:00-13:00</th>
                                <th>13:00-14:00</th>
                                <th>14:00-15:00</th>
                                <th>15:00-16:00</th>
                                <th>16:00-17:00</th>
                                <th>17:00-18:00</th>
                                <th>18:00-19:00</th>
                                <th>19:00-20:00</th>
                                <th>20:00-21:00</th>
                                <th>21:00-22:00</th>
                            </tr>
                            {rooms.map((item) => {
                                if (item.id === '1') {
                                    let collect = "d2_time1";
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time1.map((item1) => {
                                                return (
                                                    <td className={item1.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item1.id} onClick={() => { onClickselect(item1, collect, item.room) }} >
                                                        {item1.append}<br />{item1.BookingBy !== "" ? <span>{item1.BookingBy}</span> : <span>{item1.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                                else if (item.id === '2') {
                                    let collect = "d2_time2"
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time2.map((item2) => {
                                                return (
                                                    <td className={item2.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item2.id} onClick={() => { onClickselect(item2, collect, item.room) }} >
                                                        {item2.append}<br />{item2.BookingBy !== "" ? <span>{item2.BookingBy}</span> : <span>{item2.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                                else if (item.id === '3') {
                                    let collect = "d2_time3"
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time3.map((item3) => {
                                                return (
                                                    <td className={item3.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item3.id} onClick={() => { onClickselect(item3, collect, item.room) }} >
                                                        {item3.append}<br />{item3.BookingBy !== "" ? <span>{item3.BookingBy}</span> : <span>{item3.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                                else if (item.id === '4') {
                                    let collect = "d2_time4"
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time4.map((item4) => {
                                                return (
                                                    <td className={item4.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item4.id} onClick={() => { onClickselect(item4, collect, item.room) }} >
                                                        {item4.append}<br />{item4.BookingBy !== "" ? <span>{item4.BookingBy}</span> : <span>{item4.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                                else if (item.id === '5') {
                                    let collect = "d2_time5"
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time5.map((item5) => {
                                                return (
                                                    <td className={item5.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item5.id} onClick={() => { onClickselect(item5, collect, item.room) }} >
                                                        {item5.append}<br />{item5.BookingBy !== "" ? <span>{item5.BookingBy}</span> : <span>{item5.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                                else if (item.id === '6') {
                                    let collect = "d2_time6"
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time6.map((item6) => {
                                                return (
                                                    <td className={item6.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item6.id} onClick={() => { onClickselect(item6, collect, item.room) }} >
                                                        {item6.append}<br />{item6.BookingBy !== "" ? <span>{item6.BookingBy}</span> : <span>{item6.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                                else if (item.id === '7') {
                                    let collect = "d2_time7"
                                    return (
                                        <tr key={item.id}>
                                            <td className="room_label">{item.room}</td>
                                            {d2_time7.map((item7) => {
                                                return (
                                                    <td className={item7.append === "ห้องไม่ว่าง" ? "unselectable_cancel" : "status_free_cancel"}
                                                        key={item7.id} onClick={() => { onClickselect(item7, collect, item.room) }} >
                                                        {item7.append}<br />{item7.BookingBy !== "" ? <span>{item7.BookingBy}</span> : <span>{item7.Subject}</span>}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                    <br />
                    <div className="input-submit">
                        {props.isview === true? 
                            <div></div>
                            :
                            <div style={{ width: '20%' }}>
                            <Button className="p-button-secondary" style={{ float: 'left',width:'100px' }}
                                onClick={props.onLoader}
                            >
                                Clear
                            </Button>
                            <Button className="p-button-warning" style={{ float: 'right',width:'100px' }} onClick={onClickPopup}>
                                Cancel
                            </Button>
                        </div>
                        }
                    </div>
                </div>
                <CancelBookingPopup display={popup} setPopup={setPopup} bookingList={bkList} onLoader={props.onLoader} getData={getTimetomorow}/>
            </div>
        </div>
    )
}

export default CancelBookingDay2;