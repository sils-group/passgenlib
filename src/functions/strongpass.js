import {
	LOWERCASE,
	NUMBER,
	UPPERCASE,
	SPECIAL_CHARACTERS,
} from '../constante/character';

const defineFamily = ({
	add_lowercase,
	add_uppercase,
	add_number,
	add_specialsCharacter,
}) => {
	const family = [];
	if (add_lowercase) {
		family.push(LOWERCASE);
	}
	if (add_uppercase) {
		family.push(UPPERCASE);
	}
	if (add_number) {
		family.push(NUMBER);
	}
	if (add_specialsCharacter) {
		family.push(SPECIAL_CHARACTERS);
	}
	return family;
}

export const generatePass = ({
	length,
	add_lowercase,
	add_uppercase,
	add_number,
	add_specialsCharacter,
}) => {
	let generated = '';
	const family = defineFamily({ add_lowercase, add_uppercase, add_number, add_specialsCharacter });
	let iterableFamily = [];
	for (let i = 0; i < length - 1; i++) {
		if (iterableFamily.length === 0) {
			iterableFamily = family;
		}
		const choosedFamilyIndex = Math.floor(Math.random() * (iterableFamily.length - 1));
		generated += Math.floor(Math.random() * (iterableFamily[choosedFamilyIndex.length - 1]));
		iterableFamily.splice(choosedFamilyIndex, 1);
	}

	return '';
};