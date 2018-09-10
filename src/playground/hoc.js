import React from 'react'
import ReactDOM from 'react-dom'

const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private infos. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? 
                ( <div>
                    <p>you're logged-in</p> 
                    <WrappedComponent {...props} />
                </div>) : 
                (<p>Please login to see the infos</p>) }
        </div>
    )
}

const AuthInfo = requireAuthentication(info)
const AdminInfo = withAdminWarning(info)

ReactDOM.render(<AuthInfo isAuth={true} info="These are the infos" />, document.getElementById('app'))