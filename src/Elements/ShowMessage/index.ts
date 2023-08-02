

import { ElNotification } from 'element-plus';
import { COLORS } from 'src/Constants/colors';
import { MESSAGE_TYPE } from 'src/Constants/constants';
import { h } from 'vue';


interface ShowMessageProps {
    type: MESSAGE_TYPE;
    title?: string;
    message: string;
}

export const showMessage = (props: ShowMessageProps) => {
    const defineTitle = (type, title) => {
        switch (type) {
            case 'success':
                return title || 'Успех'
                break;
            case 'warning':
                return title || 'Предупреждение'
                break;
            case 'info':
                return title || 'Информация'
                break;
            case 'error':
                return title || 'Ошибка'
                break;
            default:
                return title || ''
                break;
        }
    }

    const { message, type, title } = props;
    const calculatedTitle = defineTitle(type, title);

    ElNotification({
        type: type,
        title: '',
        message: h('div', { style: `color: ${COLORS[type]}` }, [calculatedTitle, h('div', { style: `color: ${COLORS['dark']['txt']}` }, message)])

    })

}