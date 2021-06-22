import React from 'react';
import clsObj from '../screen.module.scss'
import langSwitcher from '../../../languageSwitcher'
import { Link } from 'react-router-dom'

export function BeginingScreen() {

    return (
        <div className={localStorage.theme === 'dark' ? clsObj.begining_Block_dark : clsObj.begining_Block}>
            <div className={clsObj.greet_Block}>
                <span className={clsObj.greet__txt}>
                    {langSwitcher("Welcome to FrontEndBox, " + localStorage.name + "!", "Ласкаво просимо в FrontEndBox, " + localStorage.name + "!")}
                </span>
            </div>
            <p className={clsObj.greet__article}>
                {langSwitcher("Before you start learning the basics of front - end development",
                    "Перш ніж почати вивчати основи front-end розробки")}<br />
                {langSwitcher("it will not be superfluous to understand once again what it is and why it is necessary.",
                    "не буде зайвим ще раз зрозуміти, що це таке і навіщо це потрібно.")}<br />
                {langSwitcher("If you are confident in your intentions, have no doubts and know what front-end development is",
                    "Якщо ви впевнені у своїх намірах, не сумніваєтесь і знаєте, що таке front-end розробка")}<br />
                {langSwitcher("then you can just ", "тоді можете просто ")}
                <Link to='/dashboard/HTML/lesson1' className={clsObj.greet__link}>{langSwitcher("click here", "натиснути тут")}</Link>
                {langSwitcher(" and go to your first lesson", " і перейти до свого першого уроку")}
            </p>
            <p className={clsObj.greet__article}>
                {langSwitcher("If you're still reading this,",
                    "Якщо ж ти все таки це читаєш,")}<br />
                {langSwitcher("then congratulations, today you will understand why you are here and it's not too late to run away ;-) ",
                    "тоді вітаю, сьогодні ти зрозумієш для чого ти тут і чи ще не пізно втекти ;-)")}<br />
            </p>
            <p className={clsObj.greet__article}>
                {langSwitcher("So what is a frontend?", "То, що ж таке frontend?")}<br />
                {langSwitcher("In software engineering, the terms front end and back end refer to the separation of concerns between the presentation layer (front end), and the data access layer (back end) of a piece of software, or the physical infrastructure or hardware. In the client–server model, the client is usually considered the front end and the server is usually considered the back end, even when some presentation work is actually done on the server itself.(from ",
                    "Front end — це  інтерфейс для взаємодії між користувачем і back end. Front end та back end можуть бути розподілені між однією або кількома системами.(з ")}
                <a className={clsObj.greet__link} rel="noreferrer" target="_blank" href={langSwitcher("https://en.wikipedia.org/wiki/Front_end_and_back_end", "https://uk.wikipedia.org/wiki/Front_end_%D1%82%D0%B0_back_end")}>{langSwitcher("Wikipedia", "Вікіпедії")}</a>)
        </p>
            <p className={clsObj.greet__article}>
                {langSwitcher("That is, at the core of its Frontend is what the user of the site sees in front of him, that is why he interacts with the server.",
                    "Тобто, в основі своїй frontend це те, що користувач сайту бачить перед собою, те через що він взаємодіє з сервером.")}<br />
                {langSwitcher("The frontend the first impression of user, the first experience, so to some extent it depends on the front-end developer whether the user will return again or not.",
                    "Frontend - це перше враження користувача, перший досвід, тому в деякій мірі від front-end розробника залежить чи поверниться користувач знову чи ні.")}<br />
                {langSwitcher("That's why the front-end developer is not just a programmer, it's a designer and a psychologist (well, maybe I'm exaggerating a bit, but I hope you understand the importance of the moment)",
                    "Тому front-end розробник це не просто програміст, це дизайнер і психолог (ну можливо трішки перебільшую, але я сподіваюсь ти зрозумів всю важливість моменту)")}
            </p>
            <p className={clsObj.greet__article}>
                {langSwitcher("Okay, I don't like long speeches, I'm sure now you know what you're dealing with and have at least a rough idea of what awaits you.",
                    "Добре, не люблю довгі промови, я впевнений тепер ти знаєш з чим ти маєш справу і маєш хоча б приблизне уявлення, що тебе чекає.")}<br />
                {langSwitcher("I can only wish you good luck and creative success",
                    "На цьому можу побажати тобі тільки удачі і творчих успіхів")}<br />
                {langSwitcher("I believe, no, I know that you will succeed!",
                    "Я вірю, ні, я знаю, що в тебе все вийде!")}
            </p>

            <div className={clsObj.fun_Block}>
                <span className={clsObj.fun__txt}>{langSwitcher("Well, let's go!", "Ну, що ж, погнали!")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("I bet you can't wait to start", "Бьюсь об заклад, тобі вже не терпиться почати")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("Soon", "Вже скоро")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("Almost came", "Майже прийшли")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("It's close", "Вже близько")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("Would you know how long I've been doing this", "Знали б ви як довго я це робив")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("By the way, an interesting fact ...", "Доречі, цікавий факт...")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("Oh, we've already come, maybe another time", "Ой, ми вже прийшли, може іншим разом")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("So we came, all you have left is to click on that button at the bottom", "От ми і прийшли, все що тобі залишилося, це тільки натиснути на ту кнопочку внизу")}</span>
                <span className={clsObj.fun__txt}>{langSwitcher("Well, good luck!)", "Що ж, успіхів)")}</span>
            </div>
            <Link to='/dashboard/HTML/lesson1' className={clsObj.nextLesson__btn}>{langSwitcher("Button", "Кнопка")}</Link>
        </div>
    );
}