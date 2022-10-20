import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
	MdModeNight,
	MdOutlineDarkMode,
	MdDashboardCustomize,
	MdNightsStay,
	MdLightMode,
	MdOutlineClose,
} from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { IoMdNotificationsOutline } from 'react-icons/io'
import './Navbar.css'
import { DarkModeContext } from '../../App'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../../Shared/Loading/Loading'
import { signOut } from 'firebase/auth'
import NotificationModal from './NotificationModal'
import useAdmin from '../../hooks/useRole'
import useRole from '../../hooks/useRole'
import logov1 from '../../Assest/images/logov4.png'
import logo from '../../Assest/images/logov-1.png'

const Navbar = () => {
	const [colorChange, setColorchange] = useState(false)
	let [toggle, setToggle] = useState(false)
	let [notificationModal, setNotificationModal] = useState(false)
	const [user, loading] = useAuthState(auth)
	// let navigate = useNavigate();
	let location = useLocation().pathname
	const [darkMode, setDarkMode] = useContext(DarkModeContext)
    let [role, roleLoading] = useRole(user)


	if (loading || roleLoading) {
		return <Loading />
	}
	const navBtnHndle = () => {
		setToggle(!toggle)
	}
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}
	window.addEventListener('scroll', changeNavbarColor)
	return (
		<div className=''>
			{/* start header  */}
			<header
				className={`fixed duration-300 top-0 left-0 w-full  px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-64 ${
					colorChange && (darkMode ? 'bg-teal-600' : 'bg-red text-black')
				} ${
					location !== '/' && (darkMode ? 'bg-teal-600' : 'bg-teal-900')
				} ${location === '/properties' ? 'z-10' : 'z-50'}`}
			>

				{/* phone navbar */}
				<div className='flex flex-wrap items-center justify-center py-6 sm:px-2 px-5'>
					

					<span
						onClick={navBtnHndle}
						className='md:hidden text-white text-left text-2xl cursor-pointer'
					>
						{toggle ? (
							<MdOutlineClose></MdOutlineClose>
						) : (
							<GoThreeBars></GoThreeBars>
						)}
					</span>

					<ul
						onClick={navBtnHndle}
						className={`mobile-manu flex md:hidden flex-col text-center z-10   left-0 w-full bg-white  absolute  py-4 duration-500 ${
							toggle ? ' opacity-100  top-20' : ' top-[-350px] opacity-0'
						}`}
					>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/'}
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/properties'}
						>
							Properties
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/resumeBuilder'}
						>
							Resume Builder to={'/blogs'}
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/dashboard'}
						>
							Dashboard
						</NavLink>

						{darkMode ? (
							<li className='md:ml-2.5'>
								<button
									onClick={() => setDarkMode(false)}
									className='py-2 mx-auto md:text-white md:px-2  flex items-center'
									href='#'
								>
									Light{' '}
									<MdLightMode className='ml-1 text-2xl font-semibold'></MdLightMode>
								</button>
							</li>
						) : (
							<li className='md:ml-2.5'>
								<button
									onClick={() => setDarkMode(true)}
									className='py-2 mx-auto  md:text-white md:px-2 flex items-center '
									href='#'
								>
									Dark{' '}
									<MdNightsStay className='ml-1 text-2xl font-semibold'></MdNightsStay>
								</button>
							</li>
						)}
						<div className='avatar mx-auto my-2'>
							<div className='w-9 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2'>
								<img
									src='https://placeimg.com/192/192/people'
									alt='Profile'
								/>
							</div>
						</div>
						<Link
							className='inline-block w-44 mx-auto font-semibold px-4 py-2 hover:bg-white hover:text-black  bg-warning text-black  hover:border-warning rounded'
							to={'/'}
						>
							Buy Apartment
						</Link>
					</ul>

					{/* desktop navbar  */}
					<div className='hidden md:block w-full md:w-auto' id='menu'>
						<nav className='w-full bg-white text-black  md:bg-transparent rounded shadow-lg px-6 py-10 mt-4 text-center md:p-0 md:mt-0 md:shadow-none'>
							<ul className='md:flex items-center'>
								<li>
									<Link
										to={'/'}
										className={`py-2 inline-block ${colorChange ? 'text-black' :''} md:text-white md:hidden lg:block font-semibold`}
										href='#'
									>
										Home
									</Link>
								</li>
								<li className='md:ml-2.5'>
									<Link
										to={'/properties'}
										className='py-2 inline-block md:text-white md:px-2 font-semibold'
										href='#'
									>
										Properties
									</Link>
								</li>
								<li className='md:ml-2.5'>
									<Link
										to={'/resumeBuilder'}
										className='py-2 inline-block md:text-white md:px-2 font-semibold'
									>
										Resume Builder
									</Link>
								</li>
								<li className='md:ml-2.5 md:hidden lg:block'>
									<Link
										to={'/blogs'}
										className='py-2 inline-block md:text-white md:px-2 font-semibold'
										href='#'
									>
										Blogs
									</Link>
								</li>

								<li className='md:ml-2.5'>
									<Link
										to={'/dashboard'}
										className='py-2 inline-block md:text-white md:px-2 font-semibold'
										href='#'
									>
										Dashboard
									</Link>
								</li>

								{darkMode ? (
									<li className='md:ml-2.5'>
										<button
											onClick={() => setDarkMode(false)}
											className='py-2 inline-block md:text-white md:px-2 font-semibold'
											href='#'
										>
											<MdLightMode className='text-2xl'></MdLightMode>
										</button>
									</li>
								) : (
									<li className='md:ml-2.5'>
										<button
											onClick={() => setDarkMode(true)}
											className='py-2 inline-block md:text-white md:px-2 font-semibold'
											href='#'
										>
											<MdOutlineDarkMode className='text-2xl'></MdOutlineDarkMode>
										</button>
									</li>
								)}

								<li className='md:ml-2.5 md:mr-2.5 flex items-center relative'>
									<label
										onClick={() => setNotificationModal(true)}
										htmlFor='notificattonModal'
										className='inline-block md:text-white md:px-2 font-semibold cursor-pointer'
									>
										<IoMdNotificationsOutline className='text-2xl'></IoMdNotificationsOutline>
										{/* 
                    <button
                      // onClick={() => setDarkMode()}
                      className=""
                    >
                    </button> */}
									</label>

									<div className='absolute top-3'>
										{notificationModal && (
											<NotificationModal
											// refetch={refetch}
											// setManageSellPostModal={setManageSellPostModal}
											/>
										)}
									</div>
								</li>

								<Link to={'/profile'} className='avatar mx-2'>
									<div className='w-9 rounded-full ring ring-error ring-offset-base-100 ring-offset-2'>
										<img
											src='https://placeimg.com/192/192/people'
											alt='Profile'
										/>
									</div>
								</Link>

								{user ? (
									<li className='md:ml-6 mt-3 md:mt-0'>
										<a href='/'
											onClick={() => signOut(auth)}
											className={`inline-block font-semibold px-4 py-2 ${
												colorChange
													? 'bg-red-500 hover:text-black text-black  hover:bg-warning'
													: 'hover:bg-white hover:text-teal-900 text-black bg-warning'
											}   border-white rounded cursor-pointer`}
										>
											Sign Out
										</a>
									</li>
								) : (
									<li className='md:ml-6 mt-3 md:mt-0'>
										<Link
											className={`inline-block font-semibold px-4 py-2 ${
												colorChange
													? 'bg-red-500 hover:text-black text-black  hover:bg-warning'
													: 'hover:bg-white hover:text-teal-900 text-black bg-warning'
											}    border-white rounded`}
											to='/login'
										>
											Login
										</Link>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</header>
			{/* -- end header -- */}
		</div>
	)
}

export default Navbar
