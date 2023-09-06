const mapping: Record<string, string> = {
  organizations: 'organization',
  owners: 'owner',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
