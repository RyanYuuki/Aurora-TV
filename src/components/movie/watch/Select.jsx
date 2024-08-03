import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ServerSelect({ onChange }) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="AutoEmbed" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Servers</SelectLabel>
          <SelectItem value="autoembed">AutoEmbed</SelectItem>
          <SelectItem value="vidsrcpro">VidSrc Pro</SelectItem>
          <SelectItem value="vidsrc">VidSrc</SelectItem>
          <SelectItem value="superembed">Super Embed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
