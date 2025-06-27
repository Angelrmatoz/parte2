const Notification = ({message}) => {
    if (message === null || message === '') {
        return null;
    }

    return (
        <div className="added">
            {message}
        </div>
    );
}

export default Notification;