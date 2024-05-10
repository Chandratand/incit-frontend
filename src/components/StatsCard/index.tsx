import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const StatsCard = ({ title, value }: { title: string; value?: number }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value || 0}</div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
