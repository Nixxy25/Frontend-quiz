const HomePage = () => {
  return (
    <div className="mx-32 my-16">
        <div className="flex justify-end mb-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#626C7F" d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z"/></svg>
        </div>

        <div className="flex justify-between">
            <div>
                <div>   
                    <h2>Welcome to the</h2>
                    <span>Frontend Quiz!</span>
                </div>
                
                <h3>Pick a subject to get started</h3>
            </div>

            <div className="flex gap-4 flex-col">
                <div className="flex items-center gap-4 bg-red-800 pr-32 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z"/></svg>
                    <h1>HTML</h1>
                </div>

                <div className="flex items-center gap-4 bg-red-800 w-full rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
                    <h1>CSS</h1>
                </div>

                <div className="flex items-center gap-4 bg-red-800 w-full rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M21.25 18.75C21.25 17.7554 21.6451 16.8016 22.3483 16.0983C23.0516 15.3951 24.0054 15 25 15H28.75C29.0815 15 29.3995 15.1317 29.6339 15.3661C29.8683 15.6005 30 15.9185 30 16.25C30 16.5815 29.8683 16.8995 29.6339 17.1339C29.3995 17.3683 29.0815 17.5 28.75 17.5H25C24.6685 17.5 24.3505 17.6317 24.1161 17.8661C23.8817 18.1005 23.75 18.4185 23.75 18.75V20C23.75 20.3315 23.8817 20.6495 24.1161 20.8839C24.3505 21.1183 24.6685 21.25 25 21.25H26.25C27.2446 21.25 28.1984 21.6451 28.9017 22.3483C29.6049 23.0516 30 24.0054 30 25V26.25C30 27.2446 29.6049 28.1984 28.9017 28.9017C28.1984 29.6049 27.2446 30 26.25 30H22.5C22.1685 30 21.8505 29.8683 21.6161 29.6339C21.3817 29.3995 21.25 29.0815 21.25 28.75C21.25 28.4185 21.3817 28.1005 21.6161 27.8661C21.8505 27.6317 22.1685 27.5 22.5 27.5H26.25C26.5815 27.5 26.8995 27.3683 27.1339 27.1339C27.3683 26.8995 27.5 26.5815 27.5 26.25V25C27.5 24.6685 27.3683 24.3505 27.1339 24.1161C26.8995 23.8817 26.5815 23.75 26.25 23.75H25C24.0054 23.75 23.0516 23.3549 22.3483 22.6517C21.6451 21.9484 21.25 20.9946 21.25 20V18.75ZM20 16.25C20 15.9185 19.8683 15.6005 19.6339 15.3661C19.3995 15.1317 19.0815 15 18.75 15C18.4185 15 18.1005 15.1317 17.8661 15.3661C17.6317 15.6005 17.5 15.9185 17.5 16.25V26.25C17.5 26.5815 17.3683 26.8995 17.1339 27.1339C16.8995 27.3683 16.5815 27.5 16.25 27.5H13.75C13.4185 27.5 13.1005 27.6317 12.8661 27.8661C12.6317 28.1005 12.5 28.4185 12.5 28.75C12.5 29.0815 12.6317 29.3995 12.8661 29.6339C13.1005 29.8683 13.4185 30 13.75 30H16.25C17.2446 30 18.1984 29.6049 18.9017 28.9017C19.6049 28.1984 20 27.2446 20 26.25V16.25ZM5 11.25C5 9.5924 5.65848 8.00269 6.83058 6.83058C8.00269 5.65848 9.5924 5 11.25 5H28.75C30.4076 5 31.9973 5.65848 33.1694 6.83058C34.3415 8.00269 35 9.5924 35 11.25V28.75C35 30.4076 34.3415 31.9973 33.1694 33.1694C31.9973 34.3415 30.4076 35 28.75 35H11.25C9.5924 35 8.00269 34.3415 6.83058 33.1694C5.65848 31.9973 5 30.4076 5 28.75V11.25ZM11.25 7.5C10.2554 7.5 9.30161 7.89509 8.59835 8.59835C7.89509 9.30161 7.5 10.2554 7.5 11.25V28.75C7.5 29.7446 7.89509 30.6984 8.59835 31.4017C9.30161 32.1049 10.2554 32.5 11.25 32.5H28.75C29.7446 32.5 30.6984 32.1049 31.4017 31.4017C32.1049 30.6984 32.5 29.7446 32.5 28.75V11.25C32.5 10.2554 32.1049 9.30161 31.4017 8.59835C30.6984 7.89509 29.7446 7.5 28.75 7.5H11.25Z" fill="#306AFF"/>
                    </svg>
                    <h1>Javascript</h1>
                </div>

                <div className="flex items-center gap-4 bg-red-800 w-full rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z"/></svg>
                    <h1>Accessibility</h1>
                </div>          
            </div>
        </div>
    </div>
  )
}

export default HomePage;