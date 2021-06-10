import { generatePass } from './functions/strongpass';

console.log(generatePass({
	length: 8,
	add_lowercase: true,
	add_uppercase: true,
	add_specialsCharacter: true
}));

