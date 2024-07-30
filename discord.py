import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.members = True
bot = commands.Bot(command_prefix='!', intents=intents)

roles = ['Cliente 1', 'Cliente 2', 'Cliente 3']
role_index = 0

@bot.event
async def on_ready():
    print(f'Bot is ready. Logged in as {bot.user}')

@bot.command()
async def solicitarrol(ctx):
    global role_index
    if role_index < len(roles):
        role = discord.utils.get(ctx.guild.roles, name=roles[role_index])
        if role:
            await ctx.author.add_roles(role)
            await ctx.send(f'{ctx.author.mention}, se te ha asignado el rol {role.name}.')
            role_index += 1
        else:
            await ctx.send('No se pudo encontrar el rol.')
    else:
        await ctx.send('No hay más roles disponibles.')

bot.run('YOUR_DISCORD_BOT_TOKEN')