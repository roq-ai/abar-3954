import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  created_date: yup.date().required(),
  status: yup.string().required(),
  role: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
