import React, {useState} from 'react';
import styles from './NavBar.module.scss'
import MyModal from "../UI/modal/MyModal.jsx";
import ItemForm from "../ItemForm/ItemForm.jsx";
const NavBar = ({setCars}) => {
	const [open, setOpen] = useState(false)
	return (
		<div className={styles.main}>
			<div><a href="">Home</a></div>
			<div><button onClick={() => setOpen(true)}>AddCar</button></div>
			{open && <MyModal>
				<ItemForm setCars={setCars}/>
			</MyModal >}
		</div>
	);
};

export default NavBar;
