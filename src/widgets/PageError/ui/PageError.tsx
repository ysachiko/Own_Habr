import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';
import CryingFace from '../../../shared/assets/icons/crying-svgrepo-com.svg';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={cls.PageError__textError}>
                {t('Произошла непредвидинная ошибка')}
            </p>
            <CryingFace className={cls.PageError__face} />
            <Button onClick={reloadPage} className={cls.PageError__btn}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
