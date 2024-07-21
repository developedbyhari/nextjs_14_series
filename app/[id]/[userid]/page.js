export default function Page(props) {
    return (
        <div>
            random
            <div>
                ID: {props.params.id}
            </div>
            <div>
                USERID:  {props.params.userid}
            </div>
        </div>
    );
}