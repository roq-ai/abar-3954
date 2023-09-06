import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  joined_date: yup.date().required(),
  status: yup.string().required(),
  role: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
