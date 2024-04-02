import { Link } from "react-router-dom";

import { BsCart } from "react-icons/bs";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";

import Container from "../Container";

import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.navbarLeft}>
            <Link className={styles.headerLogo} to={"/"}>
              <img src={require("../../assets/images/logo2.png")} alt="" />
            </Link>
            <ul className={styles.navbarList}>
              <li className={styles.navbarItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.navbarItem}>
                <Link to="/shop">Shop</Link>
                <ul className={styles.navbarSubnav}>
                  <li className={styles.navbarSubnavItem}>
                    <Link to={"/"}>Shop</Link>
                  </li>
                  <li className={styles.navbarSubnavItem}>
                    <Link to={"/"}>Shop</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.navbarItem}>
                <Link to={"/"}>Product</Link>
              </li>
              <li className={styles.navbarItem}>
                <Link to={"/"}>Pages</Link>
                <ul className={styles.navbarSubnav}>
                  <li className={styles.navbarSubnavItem}>
                    <Link to={"/404"}>404 Page</Link>
                  </li>
                  <li className={styles.navbarSubnavItem}>
                    <Link to={"/my-cart"}>My cart</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.navbarItem}>
                <Link to={"/"}>Docs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.navbarRight}>
            <div
              className={styles.headerIcon}
              //   onClick={() =>
              //     dispatch(
              //       openSidebar({
              //         sideBarItemActive: {
              //           name: "search product",
              //           status: "active",
              //         },
              //       })
              //     )
              //   }
            >
              <CiSearch />
            </div>
            {/* <div className={styles.headerIcon} onClick={handleClickUser}> */}
            <div className={styles.headerIcon}>
              <CiUser />
              {/* {isAuthenticated && (
                <ul
                  className={styles.headerAction}
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className={styles.headerActionItem}>
                    <Link to="/my-cart">My account</Link>
                  </li>
                  <li className={styles.headerActionItem}>
                    <Link to="/my-cart">My cart</Link>
                  </li>
                  <li
                    className={styles.headerActionItem}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLogOut();
                      ModalNotifycation({
                        title: "Logged out success.",
                      });
                    }}
                  >
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              )} */}
            </div>
            <div
              className={styles.headerIcon}
              //   onClick={() =>
              //     dispatch(
              //       openSidebar({
              //         sideBarItemActive: {
              //           name: "saved products",
              //           status: "active",
              //         },
              //       })
              //     )
              //   }
            >
              <CiHeart />
              <span className={styles.headerFavoriteNumber}>
                {/* {getCountProducts(listProductInWishList)} */}
              </span>
            </div>
            <div
              className={styles.headerIcon}
              //   onClick={() =>
              //     dispatch(
              //       openSidebar({
              //         sideBarItemActive: {
              //           name: "list products",
              //           status: "active",
              //         },
              //       })
              //     )
              //   }
            >
              <BsCart />
              <span className={styles.headerCartNumber}>
                {/* {getCountProducts(listProductInCart)} */}
              </span>
            </div>
          </div>
          {/* <SideBar /> */}
          {/* {isActiveModal && <ModalLoginForm />} */}
        </div>
      </Container>
    </div>
  );
}
