'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import MeetingsService from './services/meetings/meetings';
import UserService from './services/user/user';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewMeetings from './components/view-meetings/view-meetings';
import ViewMeeting from './components/view-meeting/view-meeting';
import ViewLogin from './components/view-login/view-login';
import ViewSignup from './components/view-signup/view-signup';
import ViewMeetingCreate from './components/view-meeting-create/view-meeting-create';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'

import daterangepicker from 'angular-daterangepicker-webpack';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    daterangepicker.name,
    UserService.name,
    MeetingsService.name,
    AppContent.name,
    ViewMeetings.name,
    ViewMeeting.name,
    ViewLogin.name,
    ViewSignup.name,
    ViewMeetingCreate.name
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;