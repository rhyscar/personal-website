import { useState, useEffect } from "react";

const TextScramble = ({ text, desiredText, inView }) => {
    const [scrambledText, setText] = useState(text);

    const unscrambleText = () => {
        let i = 0;
        let length = desiredText.length;
        let scrambledTextArray = scrambledText.split('');

        const scrambleRemainingText = () => {
            for (let j = 0; j < length; j++) {
                if (scrambledTextArray[j] !== desiredText.charAt(j)) {
                    scrambledTextArray[j] = "!@#$%^&*()0123456789".charAt(Math.floor(Math.random() * 20));
                }
            }
            setText(scrambledTextArray.join(''));
        };

        const updateText = () => {
            if (i < length) {
                scrambledTextArray[i] = desiredText.charAt(i);
                setText(scrambledTextArray.join(''));
                i++;
                scrambleRemainingText();
                setTimeout(updateText, 50);
            }
        };

        updateText();
    };

    const scrambleText = (startingText) => {
        const randomChars = "!@#$%^&*()0123456789";
        let length = startingText.length;
        let scrambledText = "";
        let i = 0;
        while (i < length) {
            const randomIndex = Math.floor(Math.random() * 20);
            scrambledText += randomChars.charAt(randomIndex);
            i++;
        }
        return scrambledText;
    };

    useEffect(() => {
        if (inView) {
            unscrambleText();
        } else {
            setText(scrambleText(desiredText));
        }
    }, [inView, desiredText]); 

    return <span>{scrambledText}</span>;
};

export default TextScramble;