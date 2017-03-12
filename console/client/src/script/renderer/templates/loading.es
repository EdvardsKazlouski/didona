import Locale from 'constants/locale';

export default `
    <div class="loading-screen-container">
        <label class="loading-screen-text">${Locale.KEY_LOADING}</label>
        <div class='loader'>
            <div class='spinner'>
                <div class='container'>
                    <div class='hex0'></div>
                    <div class='hex120'></div>
                    <div class='hex240'></div>
                    <div class='spinner'>
                        <div class='container'>
                            <div class='hex0'></div>
                            <div class='hex120'></div>
                            <div class='hex240'></div>
                            <div class='spinner'>
                                <div class='container'>
                                    <div class='hex0'></div>
                                    <div class='hex120'></div>
                                    <div class='hex240'></div>
                                    <div class='spinner'>
                                        <div class='container'>
                                            <div class='hex0'></div>
                                            <div class='hex120'></div>
                                            <div class='hex240'></div>
                                            <div class='spinner'>
                                                    <div class='container'>
                                                        <div class='hex0'></div>
                                                        <div class='hex120'></div>
                                                        <div class='hex240'></div>
                                                    </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
