import { useForm } from 'react-hook-form';

type ProfileFormInputs = {
  fullName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  birthDate: string;
  acceptTerms: boolean;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormInputs>();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <>
      <h1 className="text-4xl text-center mt-20">React Hook Form</h1>
      <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
            Nom complet
          </label>
          <input
            {...register('fullName', {
              required: 'Le nom est requis',
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: 'Le nom ne doit contenir que des lettres et des espaces'
              }
            })}
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Nom complet"
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-100"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
            Âge
          </label>
          <input
            {...register('age', {
              required: "l'age est requis",
              min: 18,
              max: 99,
              pattern: {
                value: /^[0-9]+$/,
                message: "l'age ne doit contenir que des chiffres et doit être entre 18 et 99"
              }
            })}
            type="number"
            id="age"
            name="age"
            placeholder="Âge"
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-100"
          />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
            Genre
          </label>
          <select
            {...register('gender', {
              required: 'le genre est requis',
              pattern: {
                value: /^(male|female|other)$/,
                message: 'le genre doit être homme, femme ou autre'
              }
            })}
            id="gender"
            name="gender"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-100"
          >
            <option value="">-- Sélectionner --</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold mb-2">
            Date de naissance
          </label>
          <input
            {...register('birthDate', {
              required: 'la date de naissance est requise'
            })}
            type="date"
            id="birthDate"
            name="birthDate"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-100"
          />
          {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate.message}</p>}
        </div>
        <div className="mb-6 cursor-pointer">
          <label className="flex items-center">
            <input
              {...register('acceptTerms', {
                required: true
              })}
              type="checkbox"
              name="acceptTerms"
              className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />

            <span className="text-sm text-gray-700">J'accepte les conditions d'utilisation</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}
