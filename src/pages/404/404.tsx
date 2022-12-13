import './404.scss';

function ErrorPage(): JSX.Element {
    return (
        <h1 className="no-found-page-title">
            404: Página no encontrada
        </h1>
    );
}

export default ErrorPage;