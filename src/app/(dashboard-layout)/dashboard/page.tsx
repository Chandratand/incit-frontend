import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

const DashboardPage = () => {
  const users = [
    {
      id: 1,
      name: 'Name 1',
      email: 'name1@gmail.com',
      signUpAt: '2024-05-01T12:34:56Z',
      logInCount: 5,
      logOutAt: '2024-05-09T15:00:00Z',
    },
    {
      id: 2,
      name: 'Name 2',
      email: 'name2@gmail.com',
      signUpAt: '2024-05-02T08:20:00Z',
      logInCount: 3,
      logOutAt: '2024-05-08T18:45:00Z',
    },
    {
      id: 3,
      name: 'Name 3',
      email: 'name3@gmail.com',
      signUpAt: '2024-04-30T16:15:30Z',
      logInCount: 7,
      logOutAt: '2024-05-07T14:20:00Z',
    },
    {
      id: 4,
      name: 'Name 4',
      email: 'name4@gmail.com',
      signUpAt: '2024-05-01T09:00:00Z',
      logInCount: 2,
      logOutAt: '2024-05-05T12:00:00Z',
    },
    {
      id: 5,
      name: 'Name 5',
      email: 'name5@gmail.com',
      signUpAt: '2024-05-03T13:45:00Z',
      logInCount: 9,
      logOutAt: '2024-05-09T16:30:00Z',
    },
  ];

  return (
    <section className="p-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard title={'Total signed up user'} value={10} />
          <StatsCard title={`Today's active sessions`} value={10} />
          <StatsCard title={'Average active sessions (last 7 days)'} value={10} />
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
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{format(new Date(user.signUpAt), 'PPPpp')}</TableCell>
                    <TableCell>{user.logInCount}</TableCell>
                    <TableCell>{format(new Date(user.logOutAt), 'PPPpp')}</TableCell>
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

const StatsCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};
