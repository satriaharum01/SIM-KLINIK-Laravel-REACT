import { Helmet } from 'react-helmet';

import './components/css/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TITLE = 'Dental Medan';

export type AuthLayoutProps = {
    children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <main>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <section className="material-half-bg">
                <div className="cover"></div>
            </section>
            <section className="login-content">{children}</section>
        </main>
    )
}