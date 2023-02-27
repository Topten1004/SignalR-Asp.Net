namespace SignalRDemo.Hub
{
    public interface IMessageHubClient
    {
        Task SendOffersToUser(List<string> message);
    }
}
