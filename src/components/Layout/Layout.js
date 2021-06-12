import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";

import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";



// context
import { useLayoutState } from "../../context/LayoutContext";

import Payments from "../../pages/payments/Payments";
import RefundRequests from "../../pages/refundRequests/RefundRequests";

import AdminsList from "../../pages/adminsList/AdminsList";
import InsuranceRequests from "../../pages/insuranceRequests/InsuranceRequests";
import Message from "../../pages/message/Message";
import PersonnelList from "../../pages/personnelList/PersonnelList";
import Profil from "../../pages/profil/Profil";
import RegisterInsurance from "../../pages/registerInsurance/RegisterInsurance";
import ConsultContracts from "../../pages/consultContracts/ConsultContracts";
import MyRefundRequests from "../../pages/myRefundRequests/MyRefundRequests";
import ConfirmPayment from "../../pages/confirmPayment/ConfirmPayment";
import AmericanExpress from "../../pages/americanExpress/AmericanExpress";
import BankTransfer from "../../pages/bankTransfer/BankTransfer";
import MasterCard from "../../pages/masterCard/MasterCard";
import Edinar from "../../pages/edinar/Edinar";
import Test from "../../pages/test/Test";
import Add from "../../pages/verifyPayments copy/Add";
import MyCarouselWithDots from "../../pages/carousel/Carousel";
import About from "../../landingPage/About";
import LandingPage from "../../landingPage/LandingPage";
function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
              <Route path="/app/Payments" component={Payments} />
              <Route path="/app/PersonnelList" component={PersonnelList} />
              <Route path="/app/Message" component={Message} />
              <Route path="/app/InsuranceRequests" component={InsuranceRequests} />
              <Route path="/app/RefundRequests" component={RefundRequests} />
              <Route path="/app/AdminsList" component={AdminsList} />
              <Route path="/app/PersonnelList" component={PersonnelList} />
              <Route path="/app/Profil" component={Profil} />
              <Route path="/app/registerInsurance" component={RegisterInsurance} />
              <Route path="/app/consultContracts" component={ConsultContracts} />
              <Route path="/app/myRefundRequests" component={MyRefundRequests} />
              <Route path="/app/confirmpayment" component={ConfirmPayment} />
              <Route path="/app/americanExpress" component={AmericanExpress} />
              <Route path="/app/bankTransfer" component={BankTransfer} />
              <Route path="/app/masterCard" component={MasterCard} />
              <Route path="/app/edinar" component={Edinar}/>
              <Route path="/app/add" component={Add}/>
              <Route path="/app/test" component={Test}/>
              <Route path="/app/carousel" component={MyCarouselWithDots}/>
              <Route path="/app/about" component={About}/>
              <Route path="/landingPage" component={LandingPage}/>
              
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              <div >
                {/* <Link
                  color={'primary'}
                  href={'https://flatlogic.com/'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Flatlogic
                </Link> */}
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/about'}
                  target={'_blank'}
                  className={classes.link}
                >
                  About Us
                </Link>
               {/*  <Link
                  color={'primary'}
                  href={'https://flatlogic.com/blog'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Blog
                </Link> */}
              </div>
              <div>
                <Link
                  href={'https://www.facebook.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="facebook">
                    <Icon
                      path={FacebookIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://twitter.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="twitter">
                    <Icon
                      path={TwitterIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://github.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton
                    aria-label="github"
                    style={{marginRight: -12}}
                  >
                    <Icon
                      path={GithubIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
              </div>
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
