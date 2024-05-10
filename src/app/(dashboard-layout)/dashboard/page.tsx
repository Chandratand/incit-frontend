import { fetchUserStats, fetchUsers } from '@/actions/user';
import StatsCard from '@/components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

const DashboardPage = async () => {
  const usersList = await fetchUsers();
  const userStats = await fetchUserStats();

  return (
    <section className="p-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard title={'Total signed up user'} value={userStats.totalSignedUpUsers} />
          <StatsCard title={`Today's active sessions`} value={userStats.todaysActiveUsers} />
          <StatsCard title={'Average active sessions (last 7 days)'} value={userStats.avgActiveUsers} />
        </div>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">User Database</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="border mt-4">
              <TableHeader className="bg-secondary">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Sign Up Time</TableHead>
                  <TableHead>Logged In (Times)</TableHead>
                  <TableHead>Log Out Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersList?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.signUpAt ? format(new Date(user.signUpAt), 'PPPpp') : '-'}</TableCell>
                    <TableCell>{user.logInCount || '0'}</TableCell>
                    <TableCell>{user.logOutAt ? format(new Date(user.logOutAt), 'PPPpp') : '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPage;
