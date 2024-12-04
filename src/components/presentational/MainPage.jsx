import './MainPage.css';

const MainPage = () => (
<div className="main-page">
    <h1>TaskDeck</h1>
    <div className='main-page-container'> 
        <div className='calendar-container rounded-container'></div>
        <div className='decks-container rounded-container'></div>
    </div>
</div>
);

export default MainPage;