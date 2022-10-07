import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

// Test component
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        /* eslint-disable */
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};
