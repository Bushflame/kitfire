import yup from 'yup';

export default async function validate(formData, edit = false) {
	const schema = yup.object({
		title_1a: yup.string().required('Book title is required.').min(4).max(40),
		description_1a: yup.string().required().min(5).max(4500),
		img_1a: yup
			.mixed()
			.nullable()
			.test('fileRequired', 'Image required', (value) => {
				return value !== null || edit;
			})
			.test('fileType', 'The file must be an image', (value) => {
				if (value && value.type) {
					return ['image/png', 'image/jpeg'].includes(value.type);
				}
				return true;
			})
			.test('fileSize', 'The file must be under 4 MB.', (value) => {
				if (value && value.size) {
					return value.size < 4_000_000;
				}
				return true;
			})
	});
	const data = {
		title: formData.get('title'),
		description: formData.get('description'),

		img_1a: emptyFileIsNull(formData.get('img_1a'))
	};
	try {
		await schema.validate(data, { abortEarly: false });
		return { success: true, listing: data };
	} catch (error) {
		const errors = error.inner.reduce((agg, e) => {
			if (!agg['error_' + e.path]) {
				agg['error_' + e.path] = e.message;
			}
			return agg;
		}, {});
		delete data.img_1a;

		return { ...errors, ...data, success: false };
	}
}
function emptyFileIsNull(file) {
	if (file.size === 0) {
		return null;
	}
	return file;
}
