import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@study/ui/components/alert-dialog";
import { Button } from "@study/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@study/ui/components/card";
import { Separator } from "@study/ui/components/separator";
import { Trash2 } from "lucide-react";

const SettingsPage = () => (
  <div className="flex flex-1 flex-col gap-6">
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="text-sm text-muted-foreground">
        Manage your account settings and preferences.
      </p>
    </div>

    <Card >
      <CardHeader>
        <CardTitle >Danger zone</CardTitle>
        <CardDescription>
          Irreversible actions that affect your account.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="font-medium text-foreground">Delete account</div>
          <div className="text-xs text-muted-foreground">
            Permanently delete your account and all data
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>
            <Trash2 />
            Delete account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Delete account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  </div>
);

export default SettingsPage;
