import { Helmet } from 'react-helmet';
import Header from './components/header';
import Sidebar from './components/sidebar';

import './components/css/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TITLE = 'Dental Medan';

export type DashboardLayoutProps = {
    children: React.ReactNode;
};

export function DashboardLayout ({ children }: DashboardLayoutProps) {

    return (
        <div className="app sidebar-mini">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />
            <Sidebar />
            {children}
        </div>
    )
}